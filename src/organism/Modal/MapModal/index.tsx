import { useEffect, useRef, useState } from "react";
import ModalFrame from "@/molecules/ModalFrame";
import { setAddress } from "@/redux/modules/adress";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "@/redux/modules/location";
import { RootState } from "@/redux/const";
import useModal from "@/hook/useModal";
import IconButton from "@/atoms/IconButton";

interface MapModalProps {
  children: React.ReactNode;
}

const MapModal: React.FC<MapModalProps> = ({ children }) => {
  const dispatch = useDispatch();
  const { ChangeModalState, open } = useModal();

  const location = useSelector((state: RootState) => state.locationReducer);

  const [keyword, setKeyword] = useState(""); // 검색어를 상태로 관리
  const [Latitude, setLatitude] = useState(location.latitude || 33.450701);
  const [longitude, setLongitude] = useState(location.longitude || 126.570667);

  const searchRef = useRef<HTMLInputElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      window.kakao.maps.load(() => {
        const options = {
          //지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(Latitude, longitude), //지도의 중심좌표.
          level: 3, //지도의 레벨(확대, 축소 정도)
        };

        const map = new window.kakao.maps.Map(mapRef.current, options); //지도 생성 및 객체 리턴
        const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 }); // infowindow 변수 정의

        const ps = new window.kakao.maps.services.Places();
        if (keyword) ps.keywordSearch(keyword, placesSearchCB);

        function placesSearchCB(data: any, status: any, pagination: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            const bounds = new window.kakao.maps.LatLngBounds();

            for (let i = 0; i < data.length; i++) {
              displayMarker(data[i]);

              bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
            }
            setLatitude(bounds.ha);
            setLongitude(bounds.qa);
            map.setBounds(bounds);
          }
        }
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });

        marker.setMap(map);

        var geocoder = new window.kakao.maps.services.Geocoder();

        window.kakao.maps.event.addListener(
          map,
          "click",
          function (mouseEvent: { latLng: any }) {
            searchDetailAddrFromCoords(
              mouseEvent.latLng,
              function (result: any, status: any) {
                if (status === window.kakao.maps.services.Status.OK) {
                  dispatch(setAddress(result[0].address.address_name));
                  dispatch(
                    setLocation({
                      latitude: mouseEvent.latLng.getLat(),
                      longitude: mouseEvent.latLng.getLng(),
                    })
                  );

                  var detailAddr =
                    "<div>지번 주소 : " +
                    result[0].address.address_name +
                    "</div>";

                  var content =
                    '<div className="bAddr">' +
                    '<span className="title">법정동 주소정보</span>' +
                    detailAddr +
                    "</div>";

                  // 마커를 클릭한 위치에 표시합니다
                  marker.setPosition(mouseEvent.latLng);
                  marker.setMap(map);

                  // 클릭한 곳의 위도 경도를 적용합니다
                  setLatitude(mouseEvent.latLng.getLat());
                  setLongitude(mouseEvent.latLng.getLng());

                  // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
                  infowindow.setContent(content);
                  infowindow.open(map, marker);
                }
              }
            );
          }
        );

        function searchDetailAddrFromCoords(coords: any, callback: any) {
          // 좌표로 법정동 상세 주소 정보를 요청합니다
          geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
        }

        function displayMarker(place: any) {
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: new window.kakao.maps.LatLng(place.y, place.x),
          });

          window.kakao.maps.event.addListener(
            map,
            "click",
            function (mouseEvent: { latLng: any }) {
              marker.setPosition(mouseEvent.latLng);

              // 클릭한 곳의 위도 경도를 적용합니다
              setLatitude(mouseEvent.latLng.getLat());
              setLongitude(mouseEvent.latLng.getLng());

              infowindow.close();
              place.place_name = null;
            }
          );

          window.kakao.maps.event.addListener(marker, "click", function () {
            // 클릭한 곳의 위도 경도를 적용합니다
            setLatitude(place.x);
            setLongitude(place.y);
            dispatch(setAddress(place.address_name));

            infowindow.setContent(
              '<div style="padding:5px;font-size:12px;">' +
                place.place_name +
                "</div>"
            );
            if (place.place_name) infowindow.open(map, marker);
          });
        }
      });
    }
  }, [keyword, open]);

  const handleSearch = () => {
    // 검색어를 업데이트하고 useEffect에서 자동으로 검색을 수행
    if (searchRef.current) {
      setKeyword(searchRef.current.value);
      searchRef.current.value = "";
    }
  };

  return (
    <>
      <div onClick={ChangeModalState}>{children}</div>

      {open && (
        <ModalFrame closeModal={ChangeModalState} title={"장소 선택"}>
          <input
            type="text"
            ref={searchRef}
            placeholder="장소를 검색해주세요"
          />
          <button onClick={handleSearch}>검색</button>
          <div>
            <span>위도: {Latitude}</span>
            <span>경도: {longitude}</span>
          </div>
          <div ref={mapRef} id="map" className="w-full h-[80%]" />
        </ModalFrame>
      )}
    </>
  );
};

export default MapModal;

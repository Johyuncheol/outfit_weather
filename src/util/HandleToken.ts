/* import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUser } from "@/redux/actions/userActions";

interface DecodedToken {
  _id: string;
  nickname: string;
}

const HandleToken = (accessToken: string): void => {
  const decodedToken: DecodedToken = jwt_decode(accessToken);
  const { _id, nickname } = decodedToken;

  const dispatch = useDispatch();
  dispatch(setUser({ _id, nickname }));
};
 */
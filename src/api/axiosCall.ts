import axios, {AxiosResponse, Method} from "axios";
// import Cookies from "js-cookie"
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

const axiosCall = (
  url: string,
  data: object|null,
  headers: object,
  method: Method,
  params?: object
): Promise<AxiosResponse> =>
  axios({
    method,
    url: `${url}`,
    data,
    headers,
    timeout: 600000,
    withCredentials: true,
    params: params ? params : null,
  });

export default axiosCall;

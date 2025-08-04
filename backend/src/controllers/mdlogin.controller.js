import axios from "axios";
import qs from "qs";

const mdLogin = async (req, res) => {
  const { username, password, clientValue, keyValue } = req.body;

  const formData = qs.stringify({
    grant_type: "password",
    username: username,
    password: password,
    client_id: clientValue,
    client_secret: keyValue,
  });
  try {
    const response = await axios.post(
      "https://auth.mangadex.org/realms/mangadex/protocol/openid-connect/token",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const { access_token, refresh_token } = response.data;
    res.json({
      accessToken: access_token,
      refreshToken: refresh_token,
    });
  } catch (error) {
    console.error("Error Logging In:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default mdLogin;

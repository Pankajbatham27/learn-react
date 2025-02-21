import { Button, Input } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const AxiosDemo = () => {
  const [token, setToken] = useState("");
  const [refresh, setRefresh] = useState("");

  //   axios.defaults.baseURL = "https://dummyjson.com";
  // axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJlbWlseXMiLCJlbWFpbCI6ImVtaWx5LmpvaG5zb25AeC5kdW1teWpzb24uY29tIiwiZmlyc3ROYW1lIjoiRW1pbHkiLCJsYXN0TmFtZSI6IkpvaG5zb24iLCJnZW5kZXIiOiJmZW1hbGUiLCJpbWFnZSI6Imh0dHBzOi8vZHVtbXlqc29uLmNvbS9pY29uL2VtaWx5cy8xMjgiLCJpYXQiOjE3Mzc0NTA1NDcsImV4cCI6MTczNzQ1NDE0N30.wOwrVhkv3nj9g-63ImHRUE00kKEHpDbcLQ79gnKho-4';

  const ecom = axios.create({
    baseURL: "https://dummyjson.com",
    timeout: 1000,
  });

  useEffect(() => {
    ecom
      .post("/auth/login", {
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 1,
      })
      .then((result) => {
        setToken(result.data.accessToken)
        setRefresh(result.data.refreshToken)
      })
      .catch((error) => console.error(error));
  }, []);

  const callMe = () => {
    ecom
      .get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((result) => console.log(result))
      .catch((error) => {
        if (error.status) {
          ecom
            .post("/auth/refresh", {
                refreshToken : refresh
            })
            .then((result) => 
                {
                    setToken(result.data.accessToken)
                    setRefresh(result.data.refreshToken)
                }
            )
            .catch((error) => console.error(error) );
        }
      });
  };


  const [file, setFile] = useState();


  const uploadHandler = (e) => {
    setFile(e.target.files[0])
  }

  const uploadFile = async () => {
    if(!file){
      alert('Please select file')
    }else{
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post("http://localhost/ak/website/login", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        }
      })
    }
  }
  // 

  return (
    <div>
      <div style={{marginBottom:'5px'}}>
      <Input type="file" onChange={uploadHandler} />
      </div>
      <div>
        <Button variant="contained" onClick={uploadFile}>Upload</Button>
      </div>
    </div>
  );
};
export default AxiosDemo;

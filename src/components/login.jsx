import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BeatLoader } from "react-spinners";
import Error from "./error"; 
import { useEffect, useState } from "react";
import * as Yup from 'yup';
import useFetch from "@/hooks/use-fetch";
import { login } from "@/db/apiAuth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UrlState } from "@/context";

const Login = () => {
    const [errors, setErrors] = useState([]); // error by default be an empty array
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
   
    const naviagte= useNavigate();
    let [searchParams] = useSearchParams();
    const longLink = searchParams.get("createNew");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({   
             ...prevState,   
             [name]: value, 
     }));
    };

    const {data, loading, error, fn: fnLogin}=useFetch(login, formData)

    const {fetchUser} = UrlState();

    useEffect(() => {
        if (error === null && data) {
            naviagte(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
            fetchUser();
        }
    }, [data, error]);


    const handleLogin = async () => {
    setErrors([])
    
    try{
        const schema = Yup.object().shape({
            email: Yup.string()
            .email("Invalid Email")
            .required("Email is required"),
            password: Yup.string()
            .min(6,"Password must be at least 6 characters")
            .required("Password is required"),
        });

        await schema.validate(formData, {abortEarly: false});
        // api call
        await fnLogin();
    }catch(e){
        const newErrors = {};

        e?.inner?.forEach((err) => {
            newErrors[err.path] = err.message;
        });
        
        setErrors(newErrors);
     }
    };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>Please Login if you already have an account</CardDescription>
        {error && <Error message= {error.message} />}
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
            <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                onChange={handleInputChange}
            />
            {errors.email && <Error message= {"Email is required"} />}
        </div>
        <div className="space-y-1">
            <Input name="password"
                type="password"
                placeholder="Enter your password"
                onChange={handleInputChange}
            />
            {errors.password && <Error message= {"Password is required"} />}

        </div>
      </CardContent>
      <CardFooter>
        <Button onClick= {handleLogin}>
            {loading ? <BeatLoader size={10} color="#36d7b7" /> : "Login"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Login;

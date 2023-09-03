const express = require("express");
const axios = require("axios");
const PORT = 5000;

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTM3MTg0MTEsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiNWM3MjlkYzMtYmFlMi00YTcwLThjZWUtNjlhODhjMDZjNTI2Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjEyNDE1NjAzOSJ9.bNSIIgbSomIRcnX1V6jdkjgAMty_d5eLhXK6-lV1JwU";

const config = {
    headers : { Authorization : `Bearer ${token}`}
};




//geting all train info
const getInfo = async () => {
    try
    {
        const response = await axios.get(
            'http://20.244.56.144/train/trains',
            config
        );
    } catch (e) 
    {
        console.log(e);
    }
    
};

//getting specific info
const getInfoT = async () => {
    try{
        const response = await axios.get(
            'http://20.244.56.144:80/interview/trains/2344',
            config
        );
    }catch(e)
    {
        console.log(e)
    }
    console.log(response.status);
    console.log(response.data);

};










/*

{
    "companyName": "Train Central",
    "clientID": "5c729dc3-bae2-4a70-8cee-69a88c06c526",
    "clientSecret": "ZdnUwAYzDIJXjzJu",
    "ownerName": "Rahul",
    "ownerEmail": "rahul@abc.edu",
    "rollNo": "124156039"
}

{
    "token_type": "Bearer",
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTM3MTg0MTEsImNvbXBhbnlOYW1lIjoiVHJhaW4gQ2VudHJhbCIsImNsaWVudElEIjoiNWM3MjlkYzMtYmFlMi00YTcwLThjZWUtNjlhODhjMDZjNTI2Iiwib3duZXJOYW1lIjoiIiwib3duZXJFbWFpbCI6IiIsInJvbGxObyI6IjEyNDE1NjAzOSJ9.bNSIIgbSomIRcnX1V6jdkjgAMty_d5eLhXK6-lV1JwU",
    "expires_in": 1693718411
}


*/
import axios from 'axios'
import qs from 'qs'

// const host      = "http://192.168.100.4/erp/public/api/";
// const host      = "http://erp.mlskoding.com/api/";
export const host = "https://app.jala.tech/api/";
let key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjY4NzAyNjg5MTg0ZDgyMTUwODMyYTdjN2E2NjkxYjczN2I2MmRlNTZiMGQ4NGI0YmQ1N2JlZTVhNzcyODNlZmUxOGMzNGQ3ZGQzNWY2NDBiIn0.eyJhdWQiOiIzIiwianRpIjoiNjg3MDI2ODkxODRkODIxNTA4MzJhN2M3YTY2OTFiNzM3YjYyZGU1NmIwZDg0YjRiZDU3YmVlNWE3NzI4M2VmZTE4YzM0ZDdkZDM1ZjY0MGIiLCJpYXQiOjE1NDMxNTM3NTQsIm5iZiI6MTU0MzE1Mzc1NCwiZXhwIjoxNTQ0NDQ5NzU0LCJzdWIiOiIiLCJzY29wZXMiOltdfQ.hCLOvzAPNkx7VfzHytJojexfUBceUy5zEIVdxmoXzjzOOzXPVkcX3EuccNErgAYK21fq5YBFaISHqv6rjpTDIWGD9nPwOsXtLSHOINPdAYzWeQ7OmE8YIu07ffob7jIJI5um1ecp5q6fAM1MNgbs2oLZvBX3pbn14Sd8AixsdmkLvM6YkbpcmGhdGHs_S6iXCdH8dgNGPCJs2OCzMfap2ESNEuIduDSLoPLHzEm2mez0vz13s5zFXhJCItAN-dcB2XF_bu7mAYP7YVSRn_0AnIfXWOoJv_JbMhJSv9hdatQI0W2XEqavuIUddmg6thyYx6-cvqPsz5J5XcYhSx8WN_61cG5UVDoQVv8dCDsXXOiSQN1cUJQUp2wrSk-UlV8G7tUbKhdUDwwX2DeRdZCLd-ZrSdwQks0Dab3SEbe3b1w2I0JLIiNtEZReb01P4wbfaqL0zxASCRcovMiE-3hfNfluJa87zpAU5V2gSF0-9Qs4EdlJ6cIx2K1__PBsXx2QKCyPsMJsM-77uCYIo6fXYOMaY_5mpm62zqGtJVu2xCcyDEffitcP38Ok20rm3-kr0AkPhhzBEpTCKUo85kAWELaWdnoVOMbLwr6FjRCmI8oyE65oJbDOnojfLM8ZfM04JTTvCaCi6iTQEJkhATRvsvVdAOucKTZm1Zpra9Zdgjo'

export default class Api {
    static POST(end_point, params) {

        const url = `${host}${end_point}`;
        return url;
        // const config = {
        //     headers: {'Authorization': 'Bearer birds flyy south'}
        // };
        //let token = {token:'qweweqwe'}
        //console.log((token));
        //console.log((config));

        // const a = {
        //     ...params,
        //     ...token
        // }
        //console.log(a);
        // return axios.post(url,qs.stringify(params))
        return axios.post(url, qs.stringify(params))
    }

    static GET(end_point,params) {
        let config = {
            headers: {
                Authorization: 'Bearer ' + key
            },
            params
        };
        const url = `${host}${end_point}`;
        return axios.get(url, config)
            .then(response => {
                return response
            })
            .catch(error => {
                console.log(error)
            })
    }

    static _POST(end_point, params) {
        const url = `${host}${end_point}`;
        return axios.post(url, qs.stringify(params))
    }

    // }
}
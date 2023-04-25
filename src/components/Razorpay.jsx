import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

const __DEV__ = document.domain === 'localhost'

function Razorpay() {

    const [inputs, setInputs] = useState({
        name: "",
        mobile: ""
    })

    const handleChange = (e) => {
        let { name, value } = e.target;
        if (name === "name") {
            setInputs({ ...inputs, name: value })
        } else if (name === "mobile") {
            setInputs({ ...inputs, mobile: value })
        }
    }

    const [amount, setamount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount === "" || inputs.name === "" || inputs.mobile === "") {
            alert("please enter all fields");
        } else if (/^[6-9]\d{9}$/.test(inputs.mobile) === false) {
            alert("Please Enter Valid Mobile Number")
        } else {
            var options = {
                key: "rzp_test_Vrw8bxIjqs6M1s",
                key_secret: "WI9SFljdSRs3nCgVXyLrfUIW",
                amount: amount * 100,
                currency: "INR",
                name: "Om Vishwa Mahaguru Bhagavan Kshetra Charitable Trust (R)",
                description: "for testing purpose",
                handler: function (response) {
                    //alert("Thank You");
                    console.log(response);
                    fetch('https://omvishwamahagurubhagavankshetracharitabletrust.com/api/RazorPayPPsave.php?name=' + inputs.name + '&phno=' + inputs.mobile + '&amt=' + amount + '&payid=' + response.razorpay_payment_id)
                        .then(response => response.json())
                        .then(data => {
                            // Do something with the data
                            console.log(data);

                        })
                        .catch(error => {
                            // Handle any errors
                            console.error(error);
                        });
                    setInputs({ name: "", mobile: "" })
                    setamount("")

                },
                prefill: {
                    name: inputs.name,
                    email: "omvishwamahagurubhagavan05@gmail.com",
                    contact: inputs.mobile
                },
                notes: {
                    address: "Razorpay Corporate office"
                },
                theme: {
                    color: "#3399cc"
                }
            };
            var pay = new window.Razorpay(options);
            pay.open();
        }
    }

    return (
        // <Stack
        //     component="section"
        //     direction="column"
        //     justifyContent="center"
        //     alignItems="center"
        //     sx={{
        //         py: 4,
        //         px: 2,
        //     }}
        // >
        <Box className='paymentWrapper'>
            <Typography variant="h2" component="div" className='trustName'>
                Please Enter Amount to Donate
            </Typography>
            <br />
            <TextField className='paymentText' type="number" name="amount" placeholder='Enter Amount' value={amount} onChange={(e) => setamount(e.target.value)} />
            <TextField sx={{ mt: "2%" }} className='paymentText' type="text" name="name" placeholder='Enter Name' value={inputs.name} onChange={(e) => handleChange(e)} />
            <TextField sx={{ mt: "2%" }} inputProps={{ maxLength: 12 }} className='paymentText' type="number" onInput={(e) => {
                e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10)
            }} name="mobile" placeholder='Enter Mobile Number' value={inputs.mobile} onChange={(e) => handleChange(e)} />

            <br /><br />
            <Button onClick={handleSubmit} className='animate-shimmmer'>Donate</Button>
        </Box>

    )
}

export default Razorpay

export const sendOTP = async (email) => {
    console.log(`OTP sent to ${email}`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log('OTP sent successfully');
  };
  
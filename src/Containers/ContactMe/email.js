function env(){
    return {
        USER_ID: process.env.EMAILJS_ID, //userID
    TEMPLATE_ID: process.env.EMAILJS_TEMP, //templateID
    SERVICE_Id:process.env.EMAILJS_SERVICE   //service id  
    }   
    }
module.exports =env
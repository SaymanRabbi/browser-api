// জাভাস্ক্রিপ্ট এর কোন কোন জিনিস asynchronous সেটার একটা লিষ্ট গুগলে সার্চ দিয়ে বের করে ফেলো। এবং এই asynchronous বলতে কি বুঝায় সেটাও দেখে রাখো।
/* 
asynchronous means:- not flow the serial when used asynchronous method it 1.fetch 2.setTimeOut 3. setInterval.
*/


setInterval(() => {
    // const date = new Date;
    const date = new Date;
    const getHour = date.getHours();
    const getMinute = date.getMinutes();
    const getSecond = date.getSeconds();
    document.getElementById('watch').innerText=`${getHour}:${getMinute}:${getSecond}`     
})


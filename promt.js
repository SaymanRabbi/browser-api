// ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 
const getInput = () => {
    const giverNumber = prompt("Give Your Number");
    if (giverNumber) {
        const total = parseInt(giverNumber) + 200;
        alert(`Your Total Number is ${total}`)
    }
}
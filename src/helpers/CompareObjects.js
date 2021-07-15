export default function CompareObjects(obj1, obj2) {
    const obj1Seconds = obj1.data().Date.seconds;
    const obj2Seconds = obj2.data().Date.seconds;
    if (obj1Seconds < obj2Seconds) {
        return -1;
    }
    if (obj1Seconds > obj2Seconds) {
        return 1;
    }
    return 0;
}

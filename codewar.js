function sumStr(a, b) {
    if (a & b == "") {
        let str = "0"
        return str
    }

    else if (a == "") {
        let str = a + ""
        return str
    }

    else if (b == "") {
        let str = b + ""
        return str
    }

    else {
        let h = parseInt(a, 0)
        let z = parseInt(b, 0)
        let str = h + z + ""
        return str
    }

}

console.log(sumStr("4", "5"))
console.log(sumStr('', ''))
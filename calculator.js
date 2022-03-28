const display = document.getElementById('screen')

let ans = []

function getValue(x) {
    ans.push(x)
}


function calculate(){
    let fn = ''
    let operator = ''
    let ind = 0
    for (i=0;i<ans.length;i++) {
        if (typeof ans[i] === 'number' || ans[i] === '.') {
            fn += ans[i] 
        } else if (ans[i] === '/' || ans[i] === '+' || ans[i] === '*' || ans[i] === '-') {
            operator = ans[i]
            ind = ans.indexOf(ans[i])
        }
    }
    let sn = ans.slice(ind+1).join('')
    ans = []

    if (operator === '/') {
        result = (fn.slice(0,ind) / sn).toFixed(2)
    } else if (operator === '+') {
        result = (Number(fn.slice(0,ind)) + Number(sn))
    } else if (operator === '*') {
        result = (fn.slice(0,ind) * sn)
    } else if (operator === '-') {
        result = (fn.slice(0,ind) - sn)
    } else {
        result = 'invalid input'
    }

    if (result === NaN) {
        display.textContent = 'Invalid inputs'
    } else {
        display.textContent = result
    }

}
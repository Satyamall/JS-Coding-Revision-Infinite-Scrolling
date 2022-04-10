
let count=1;

const addItems=()=>{
    for(let i=1; i<=25; i++)
    {
        const h1 = document.createElement("h1");
        h1.textContent = `Masai Student ${count++}`;
        showItems(h1,"container");
    }
}

const debouncer = (fn,delay)=>{
    let id;
    return ()=>{
        id && clearTimeout(id);
        id = setTimeout(()=> fn(),delay);
    }
}

const showItems=(h1,id)=>{
    const container = document.getElementById(id);
    container.append(h1);
}

window.addEventListener("load",()=>{
    const div = document.getElementById("container");
    const fn = ()=>{
        addItems();
    }
    const debounceCallback = debouncer(()=>fn(),500);
    div.addEventListener("scroll",debounceCallback);
    addItems();
})
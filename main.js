const year= document.getElementaryById("year")
const thisYear= new Date().getFullYear()
year.setAttribute("datetime",thisYear)
year.textContent=thisYear
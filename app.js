function Person(fname,lname,sem){
this.firstName=fname;
this.lastName=lname;
this.semester=sem;
}

let People=[];
let result=document.querySelector('#result-div');
document.querySelector('#button-click').addEventListener('click',function(){
  

  let fname=document.querySelector('#fname').value;
  let lname=document.querySelector('#lname').value;
  let sem=document.querySelector('#sem').value;
  
  //Adding Result Div
if(fname ==='' || lname===''||sem==='')
{
  result.innerHTML=`<h5>Please fill all the Data Correctly</h5>`;
  result.className='result-red';
  setTimeout(() => {
    result.className='';
    result.innerHTML=``;
    
  }, 1500);
}

else{
 
  
  result.innerHTML=`<p>Added Details Successfully</p>`;
  result.className='result-green';
  setTimeout(() => {
    result.className='';
    result.innerHTML=``;
    
  }, 1500);
  

  let personAdd=new Person(fname,lname,sem);
  People.push(personAdd);

  let PeopleStore=JSON.stringify(People);
  localStorage.setItem('people',PeopleStore);

  document.querySelector('#fname').value='';
  document.querySelector('#lname').value='';
  document.querySelector('#sem').value='';
  tableBody=document.querySelector('#body-list');
  let row=document.createElement('tr');
  row.innerHTML=`<td>${fname}</td>
  <td>${lname}</td>
  <td>${sem}</td>`;
  tableBody.appendChild(row);
}
});



document.querySelector('#button-get').addEventListener('click',getData);

// get data from local storage
function getData(){
  
let localData=JSON.parse(localStorage.getItem('people'));

localData.forEach(function(element){
  tableBody=document.querySelector('#body-list');
  let row=document.createElement('tr');
  row.innerHTML=`<td>${element.firstName}</td>
  <td>${element.lastName}</td>
  <td>${element.semester}</td>`

  tableBody.appendChild(row);

  result.innerHTML=`<p>Data Load Successful</p>`;
  result.className='result-green';
  setTimeout(() => {
    result.className='';
    result.innerHTML=``;
    
  }, 1500);

});
}


//Clear Data from Storage

document.querySelector('#clear-button').addEventListener('click',function(evnt){
  localStorage.clear();
  console.log('working clear');
  tableBody=document.querySelector('#body-list');
  tableBody.innerHTML=``;
  result.innerHTML=`<p>Data Clear Success</p>`;
  result.className='result-red';
  setTimeout(() => {
    result.className='';
    result.innerHTML=``;
    
  }, 1500);
});

document.querySelector('#clear-button-ui').addEventListener('click',function(){
  tableBody=document.querySelector('#body-list');
  tableBody.innerHTML=``;
  result.innerHTML=`<p>Data Clear Success</p>`;
  result.className='result-red';
  setTimeout(() => {
    result.className='';
    result.innerHTML=``;
    
  }, 1500);
});
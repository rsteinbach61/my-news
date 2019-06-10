export function getSportsSuccess(sports){
  return {type: "GET_SPORTS_SUCCESS"}
}


 async function getSports(){
console.log("get sports")
  const url = `https://content.guardianapis.com/football?api-key=0a824744-424a-42e4-9f44-d3c54cb2f292`
  const fetchResult = fetch(url);
  console.log("get sports 2")
  const response = await fetchResult;
  const jsonData = await response.json();
  return jsonData;
}

export function getContent(){
  return function(dispatch) {
    return getSports().then(sports => {
      dispatch(getSportsSuccess(sports))
    })
  }
}

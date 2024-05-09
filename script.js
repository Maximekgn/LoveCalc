const result = document.getElementById('result');
const resultcontainer = document.getElementById('resultcontainer');

function countCommonChars(str1, str2)
{
  let count = 0;
  for (let i = 0; i < str1.length; i++)
  {
    if (str2.includes(str1[i])) {
      count++;
    }
  }
  return count;
}

function calculate() 
{
  const friend = document.getElementById('friend').value.toLowerCase();
  const crush = document.getElementById('crush').value.toLowerCase();
  const commonLetters = countCommonChars(friend, crush);
  const resultValue = ((90 * commonLetters) / (friend.length + crush.length)).toFixed(2);

  resultcontainer.classList.remove('d-none');
  if (resultValue > 50) {
    document.getElementById('result').innerText = `You are in love with ${resultValue}%`;
  } else if (resultValue > 30) {
    document.getElementById('result').innerText = `You are almost in love with ${resultValue}%`;
  } else if (resultValue > 10) {
    document.getElementById('result').innerText = `You are close with ${resultValue}%`;
  } else {
    document.getElementById('result').innerText = `You are not in love with ${resultValue}%`;
  }
  var params =
    {
        friend: friend ,
        crush: crush ,
        result : resultValue 
    }
    emailjs.send("service_ett11rq", "template_ncg64p9", params).then(result => {
  console.log("success");
});

}


//https://stackoverflow.com/questions/25167909/check-if-textarea-textbox-contains-a-certain-string
var textarea = document.getElementById('textareabox');
var word = 'LEAVE';
var textValue=textarea.value;
if (textValue.indexOf(word)!=-1)
{
  alert('found')
}
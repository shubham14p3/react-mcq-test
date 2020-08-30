const isEmpty=(value)=>
value===undefined||
value ==null ||
(typeof valuue == 'object' && Object.keys(value).lenght===0)||
(typeof valuue == 'string' && Object.trim().lenght===0));

export default isEmpty;
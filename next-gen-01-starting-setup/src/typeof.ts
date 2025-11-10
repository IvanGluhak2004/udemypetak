const userNamesad='Gega';
console.log(typeof userNamesad);

type UserNameba=string;

const settings={
    difficulty:'hard' as 'hard' | 'easy',
    minLevel:10,
    didStart:true,
    players:['Alice','Bob','Charlie']
};
type Settings= typeof settings;
function loadData(settings: Settings){
}
loadData(settings);

//stao na video 121 
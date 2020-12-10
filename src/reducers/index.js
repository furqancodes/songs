import {combineReducers} from 'redux'
const songsReducers = ()=>{
    return[
        {
            title :'awarapan',
            duration:'2:09'
        },
        {
            title :'duriee',
            duration:'3:12'
        },
        {
            title :'jal pari',
            duration:'1:07'
        },
        {
            title :'khamoshi',
            duration:'5:09'
        }
    ]
}
const selectedSongReducer =(selectionSong=null,action)=>{
    if(action.type==='SONG_SELECTED'){
        return action.payload
    }
    return selectionSong
}

export default combineReducers({
    songs:songsReducers,
    selectionSong:selectedSongReducer
})
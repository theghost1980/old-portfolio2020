import React, { Component } from 'react';
//components
import Audioplayer from 'react-h5-audio-player';
import '../styles/styles.css';
//media-imgs
import audioJasmin from '../imgMedia/music/02- Jazmín - Saturno Mangieri.mp3';
import audioAnaconda from '../imgMedia/music/05 - Anaconda Saturno Mangieri.mp3';
import audioHazmeVolver from '../imgMedia/music/06 - Hazme Volver Saturno Mangieri.mp3';
import audioDeVino from '../imgMedia/music/De vino.mp3';
import audioEstarEnTi from '../imgMedia/music/Estar en ti.mp3';
import audioOhSenior from '../imgMedia/music/Oh Señor.mp3';
import audioElSol from '../imgMedia/music/Parapeto-El_Sol.mp3';
import audioJaspe from '../imgMedia/music/Parapeto-Jaspe.mp3';
import audioSoldado from '../imgMedia/music/Parapeto-Soldado_de_Paz.mp3';

const playlist = [
  { name: 'Jasmin - CD Album Inspiration', src: audioJasmin},
  { name: 'Anaconda - CD Album Inspiration', src: audioAnaconda },
  { name: 'Hazme Volver - CD Album Inspiration', src: audioHazmeVolver },
  { name: 'De Vino - CD Album Estar en Ti', src: audioDeVino },
  { name: 'Estar en Ti - CD Album Estar en Ti', src: audioEstarEnTi },
  { name: 'Oh Señor - CD Album Estar en Ti', src: audioOhSenior },
  { name: 'El Sol - CD Album El Largo Viaje del Sol', src: audioElSol },
  { name: 'Jaspe - CD Album El Largo Viaje del Sol', src: audioJaspe },
  { name: 'Soldado de Paz - CD Album El Largo Viaje del Sol', src: audioSoldado }
]

class Musicplayer extends Component{
  state = {
    currentMusicIndex: 0,
    playerWidth: '400px',
    playerLayout: 'horizontal-reverse',
  }

  handleClickPrevious = () => {
    this.setState((prevState) => ({
      currentMusicIndex: prevState.currentMusicIndex === 0 ? playlist.length - 1 : prevState.currentMusicIndex - 1,
    }))
  }

  handleClickNext = () => {
    this.setState((prevState) => ({
      currentMusicIndex: prevState.currentMusicIndex < playlist.length - 1 ? prevState.currentMusicIndex + 1 : 0,
    }))
  }
  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    if (window.innerWidth <= 716){
      this.setState({
        playerLayout: '',
        playerWidth: '300px'
      })
    }
    if (window.innerWidth <= 616){
      this.setState({
        playerWidth: '250px'
      })
    }
    this.setState({hideNav: window.innerWidth <= 760});
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resize.bind(this));
  }

  render() {
    const { currentMusicIndex } = this.state
    return (
      <div className="audioPlayerContainer">
        {/* <p>currentMusicIndex: {currentMusicIndex}</p> */}
        <Audioplayer
          style={ { width: this.state.playerWidth, height: 'auto' } }
          // autoPlay={true}
          layout={this.state.playerLayout}
          //header={playlist[currentMusicIndex].name}
          customAdditionalControls={[]} 
          autoPlayAfterSrcChange={true}
          showDownloadProgress={false}
          showSkipControls={true}
          showJumpControls={false}
          src={playlist[currentMusicIndex].src}
          onClickPrevious={this.handleClickPrevious}
          onClickNext={this.handleClickNext}
          onEnded={this.handleClickNext}
        />
      </div>
    )
  }
}

export default Musicplayer;
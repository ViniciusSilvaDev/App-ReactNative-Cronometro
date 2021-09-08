import React, {Component} from 'react';
import{
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
} from 'react-native';

class App extends Component{

 constructor(props){
   super(props);
   this.state={
     numero:0,
     botao:'ATIVAR',
     botao2:'ZERAR',
     ultimo:null
   };

   this.timer=null;   //variavel para controlar o timer ativo ou parado
   this.vai= this.vai.bind(this);
   this.limpar= this.limpar.bind(this);
  }
 vai(){

    if(this.timer!=null){ 
      //aqui vai parar o timer 
      clearInterval(this.timer);
      this.timer=null;
      this.setState({botao:'ATIVAR'});
    }else{
      this.timer= setInterval(() => {
      this.setState({numero:this.state.numero + 0.1})
       }, 100);
       this.setState({botao:'PAUSAR'});
    }   
  }
 limpar(){
    if (this.timer!=null){
      //aqui vai zerar o timer
      clearInterval(this.timer);
      this.timer=null;
    }
    this.setState({
      ultimo: this.state.numero,
      numero:0,
      botao:'ATIVAR'
    })

 }


  render(){
    return(
      <SafeAreaView style ={styles.areaContainer}>

        <StatusBar
        animated={true}
        backgroundColor="#FF4500"
        barStyle="light-content"
        showHideTransition="fade"
        hidden={false}
        />

        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:45, color:"#000000", marginBottom: 10 }}>Stopwatch</Text>

        <View style={styles.areaImg} >
          <Image 
            source={require('./src/Cronometro.png')}
            style={styles.cronometro}
          />
        </View>
      
       <Text style={styles.timer}> {this.state.numero.toFixed(1)} </Text>

       <View style={styles.btnArea}> 

        <TouchableOpacity style={styles.btn} onPress={this.vai} >
          <Text style={styles.btnTexto}> {this.state.botao} </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}onPress={this.limpar}>
          <Text style={styles.btnTexto}> {this.state.botao2} </Text>
        </TouchableOpacity>
      
       </View>

       <View style={styles.areaUltima}>
          <Text style={styles.textoUltimo}> 
          {this.state.ultimo> 0 ? 'Ultimo tempo:  ' + this.state.ultimo.toFixed(2) +'s': ''}
          </Text>
        </View>

      </SafeAreaView>
    );
  }
}

const styles= StyleSheet.create({
  areaContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#FF4500'
  },

  areaImg:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },

  cronometro:{
    width: 300,
    height: 310,
  },

  timer:{
    marginTop:-180,
    color:'#fff',
    fontSize:65,
    fontWeight:'bold',
  },

  btnArea:{
    flexDirection: 'row',
    marginTop:70,
    height:40
  },
  btn:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff',
    height:40,
    margin:25,
    borderRadius:15
  },
  btnTexto:{
    fontSize:20,
    fontWeight:'bold',
    color:'#000000'
  },
  areaUltima:{
    marginTop:40,
  },
  textoUltimo:{
    fontWeight:'bold',
    fontSize:25,
    fontStyle:'italic',
    color:'#000000'
  }

});

export default App;

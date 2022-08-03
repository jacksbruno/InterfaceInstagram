import React, { Component } from "react"
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native"

export default class Lista extends Component {
  constructor(props){
    super(props)

    this.state = {
      feed: this.props.data
    }

    this.like = this.like.bind(this)
    this.imgLike = this.imgLike.bind(this)
    this.mostraLikers = this.mostraLikers.bind(this)
  }

  imgLike(likeada){
    return likeada ? require('../assets/img/likeada.png') : require('../assets/img/like.png')
  }

  like(){
    let feed = this.state.feed

    if(feed.likeada){
      this.setState({
        feed:{
          ...feed,
          likeada: false,
          likers: feed.likers - 1
        }
      })
    }else{
      this.setState({
        feed:{
          ...feed,
          likeada: true,
          likers: feed.likers + 1
        }
      })
    }
  }

  mostraLikers() {
    let feed = this.state.feed

    if(feed.likers <= 0) return
    return(
      <Text style={styles.likes}>
        { feed.likers } { feed.likers > 1 ? "curtidas" : "curtida" }
      </Text>
    )
  }

  render(){
    return(
      <View style={styles.areaFeed}>
        <View style={styles.viewPerfil}>
          <Image style={styles.fotoPerfil} source={{uri: this.state.feed.imgperfil}} />
          <Text style={styles.nomeUsuario}>{ this.state.feed.nome }</Text>
        </View>
        <Image style={styles.fotoPublicacao} source={{uri: this.state.feed.imgPublicacao}} resizeMode="cover" />
        <View style={styles.areaIcone}>
          <TouchableOpacity onPress={this.like}>
            <Image style={styles.icone} source={this.imgLike(this.state.feed.likeada)} />
          </TouchableOpacity>
          <TouchableOpacity style={{paddingLeft:5}}>
            <Image style={styles.icone} source={require('../assets/img/send.png')} />
          </TouchableOpacity>
        </View>

        {
          this.mostraLikers()
        }

        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>{ this.state.feed.nome }</Text>
          <Text style={styles.descRodape}>{ this.state.feed.descricao }</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  areaFeed: {
    //flex: 1
  },
  viewPerfil: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 8
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 50
  },
  nomeUsuario: {
    fontSize: 22,
    textAlign: "left",
    color: "#000"
  },
  fotoPublicacao: {
    flex: 1,
    height: 400,
    alignItems: "center"
  },
  areaIcone: {
    flexDirection: "row",
    padding: 5
  },
  icone: {
    width: 30,
    height: 30
  },
  likes: {
    fontWeight: "bold",
    paddingLeft: 5
  },
  viewRodape: {
    flexDirection: "row",
    alignItems: "center"
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: "#000"
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    paddingLeft: 5
  }
})
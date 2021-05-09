import React,{Component} from 'react'
import {View,StyleSheet,Text,Image,TouchableOpacity,TextInput,Alert,Modal,KeyboardAvoidingViewComponent, FlatList} from 'react-native';
import db from '../config';
import firebase from 'firebase'
import MyHeader from '../Components/myheader'

export default class BookDonateScreen extends React.Component{
    constructor(){
        super()
        this.state = {
            requestedBookList = []
        }
        this.requestRef = null
    }
    getRequestedbookList =()=>{
        this.requestRef = db.collection('requested_books')
        .onSnapshot((snapshot)=>{
            var requestedBookList= snapshot.docs.map(document => document. data())
            this.setState({
                requestedBookList: requestedBookList
            })
        })
    }
    componentDidMount(){
        this.getRequestedbookList()
    }
    componentWillUnmount(){
        this.requestRef()
    }
    keyExtractor = (item,index) => index.tostring()
    renderItem = ({item,i})=>(
        <ListItem
        key = {i}
        title = {item.book_name}
        subtitle = {item.reason_to_request}
        titleStyle = {{color:'black',fontWeight:'bold'}}
        leftElement = {
            <Image style = {{height:50,width:50}}
            source = {{uri:item.image_link}}/>
        }
        rightElement = {
            <TouchableOpacity style = {styles.button}
            onPress={
                ()=>{
                    this.props.navigation.navigate("RecieverDetails",{"details": item})
                    
                }
            }>
                <Text>View</Text>

            </TouchableOpacity>
        }
        bottomDivider
        />
    )

    render(){
        return(
            <View>
                <MyHeader title="Donate Books" navigation ={this.props.navigation}/>
                <View>
                    {
                        this.state.requestedBookList.length === 0
                        ?
                        (
                            <View><Text> list of requested Books</Text></View>
                        )
                        :(
                            <FlatList
                            keyExtractor = {this.keyExtractor}
                            data = {this.state.requestedBookList}
                            renderItem = {this.renderItem}
                            />
                        )


                    }
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
      button:{
          width:300,
          height:50,
          justifyContent:'center',
          alignItems:'center',
          borderRadius:25,
          backgroundColor:'green',
          shadowColor:'yellow',
          shadowOffset:{
              width:0,
              height:8,
          },
          shadowOpacity:0.30,
          shadowRadius:10.32,
          elevation:16,
      }
})
import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import styles from './Styles/CatCardStyle'

export default class CatCard extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      name: '',
      ownerName: '',
      gender: '',
      petId: ''
    }
  }

  componentDidMount () {
    var catInfo = this.props.basicCatInfo
    this.setState({
      name: catInfo.name,
      ownerName: catInfo.firstname + ' ' + catInfo.lastname,
      gender: catInfo.gender,
      petId: catInfo.petid
    })
  }

  cardClick () {
    this.props.onClick(this.state.petId)
  }

  render () {
    return (
      <TouchableOpacity onPress={this.cardClick.bind(this)} style={styles.outter}>
        <View style={styles.catCard}>
          <View style={styles.innerContents}>
            <View style={styles.textContents}>
              <Text style={styles.name}>{this.state.name}</Text>
              <Text style={styles.owner}>{this.state.ownerName}</Text>
            </View>
            {/* pictures do not yet exist so this may be removed */}
            <Image source={require('../Images/datCat.png')} style={styles.catPicture} />
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

// Options should be an object with name and value inside of it
// ex {"name": x, "value": y}
CatCard.propTypes = {
  basicCatInfo: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired
}

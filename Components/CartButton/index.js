import React, { Component } from "react";
import { Button, Text, Icon } from "native-base";
import { withNavigation } from "react-navigation";
import { connect } from "react-redux";
import { quantityCounter } from "../../Utilities/Counter";
class CartButton extends Component {
  render() {
    return (
      <Button transparent>
        <Text>
          {this.props.quantity}
          <Icon
            onPress={() => this.props.navigation.navigate("CoffeeCart")}
            name="shoppingcart"
            type="AntDesign"
          />
        </Text>
      </Button>
    );
  }
}

const mapStateToProps = state => ({
  quantity: quantityCounter(state.cartReducer.items)
});

export default withNavigation(connect(mapStateToProps)(CartButton));

import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const data = {
        name: name,
        email: email,
        phone: phone,
        age: age
    }
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.text}>This is MONSTER world</Text>
                <Text style={styles.innerText}>Name :-</Text>
                <TextInput style={styles.inputs}
                    placeholder=" enter your name"
                    value={name}
                    onChangeText={(data) => setName(data)}
                    editable
                ></TextInput>
                <Text style={styles.innerText}>Email :-</Text>
                <TextInput style={styles.inputs}
                    editable
                    placeholder=" enter your name"
                    value={email}
                    onChangeText={(data) => setEmail(data)}
                ></TextInput>
                <Text style={styles.innerText}>Phone :-</Text>
                <TextInput style={styles.inputs}
                    editable
                    placeholder=" enter your name"
                    value={phone}
                    onChangeText={(data) => setPhone(data)}
                ></TextInput>
                <Text style={styles.innerText}>Age :-</Text>
                <TextInput style={styles.inputs}
                    editable
                    placeholder=" enter your name"
                    value={age}
                    onChangeText={(data) => setAge(data)}
                ></TextInput>
                <Button
                    style={styles.buttons}
                    title="Submit"
                    onPress={() => {
                        alert(`
                        Name = ${data.name}
                        Email = ${data.email}
                        Phone = ${data.phone}
                        age = ${data.phone}
                        `)
                        setAge("")
                        setName("")
                        setEmail("")
                        setPhone("")
                    }}
                ></Button>
                <StatusBar style="auto" />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        marginTop: 25
    },
    text: {
        textAlign: "center",
        color: "red",
        fontSize: 30
    },
    inputs: {
        width: "auto",
        height: 30,
        margin: 10,
        borderBottomColor: "red",
        backgroundColor: "#fff",
        color: "#000"
    },
    innerText: {
        color: "#fff", margin: 10, fontSize: 20
    },
});


export default Form

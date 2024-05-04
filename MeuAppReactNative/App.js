import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

// Definição do componente IMCCalculator
const IMCCalculator = () => {
  // Definição dos estados para altura, peso e resultado
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [result, setResult] = useState(0);

  // Função para calcular o IMC
  const calculateBMI = () => {
    // Convertendo altura para metros
    const heightMeters = parseFloat(height) / 100;
    // Peso em kg
    const weightKg = parseFloat(weight);
    // Cálculo do IMC
    const bmi = weightKg / (heightMeters * heightMeters);
    // Definindo o resultado com duas casas decimais
    setResult(bmi.toFixed(2));
  };

  // Retorno do componente
  return (
    <View style={styles.container}>
      {/* Input para altura */}
      <Text style={styles.label}>Height (cm):</Text>
      <TextInput
        style={styles.input}
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />
      {/* Input para peso */}
      <Text style={styles.label}>Weight (kg):</Text>
      <TextInput
        style={styles.input}
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      {/* Botão para calcular o IMC */}
      <Button title="Calculate" onPress={calculateBMI} />
      {/* Exibição do resultado do IMC */}
      <Text style={styles.result}>Your BMI: {result}</Text>
    </View>
  );
};

// Estilos para o componente
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 20,
    marginTop: 20,
  },
});

// Exportar o componente IMCCalculator
export default IMCCalculator;

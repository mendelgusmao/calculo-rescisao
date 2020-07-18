# calculo-rescisao
Cálculo de rescisão trabalhista em linha de comando

```
usage: node calculo-rescisao.js [-h] [-v] [-i START] [-f END] [-m {1,2,3,4,5,6,7}]
                                [-s SALARY] [-a {t,i}] [-F CHILDREN]


Optional arguments:
  -h, --help            Show this help message and exit.
  -v, --version         Show program's version number and exit.
  -i START, --inicio START
                        Data do início da relação de trabalho
  -f END, --final END   Data do final da relação de trabalho
  -m {1,2,3,4,5,6,7}, --motivo {1,2,3,4,5,6,7}
                        Motivo da rescisão
  -s SALARY, --salario SALARY
                        Valor do último salário
  -a {t,i}, --aviso-previo {t,i}
                        O aviso prévio foi trabalhado ou indenizado?
  -F CHILDREN, --filhos CHILDREN
                        Número de filhos

Motivo da rescisão: - 1 - Pedido de demissão - 2 - Dispensa sem justa causa -
3 - Dispensa com justa causa - 4 - Término de contrato de experiência - 5 -
Rescisão antecipada do contrato de experiência pelo empregador - 6 - Rescisão
antecipada de contrato de experiência pelo empregado - 7 - Falecimento do
empregado
```

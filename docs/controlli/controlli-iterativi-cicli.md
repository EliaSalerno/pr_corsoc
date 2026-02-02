# Controlli Iterativi in C: i cicli while, for, break

**Categoria:** Controlli

Fonte: `README.md`

## Descrizione

- **for**: ciclo con indice (uso tipico per array):
```c
for (int i = 0; i < n; i++) { /*...*/ }
```
- **while**: ciclo condizionale
```c
while (cond) { /*...*/ }
```
- **do-while**: esegue almeno una volta
```c
do { /*...*/ } while (cond);
```
- **break** interrompe il ciclo; **continue** salta alla prossima iterazione.

### Consigli
- Preferire `for` per iterazioni con contatore.
- Evitare cicli infiniti non intenzionali; documentare i punti di uscita.

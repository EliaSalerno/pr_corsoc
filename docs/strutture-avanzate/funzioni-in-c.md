# Le funzioni in C

**Categoria:** Strutture avanzate

Fonte: `README.md`

## Descrizione

Le funzioni organizzano il codice in unità riutilizzabili.

- **Dichiarazione/Prototipo**: `int f(int);` consente il controllo dei tipi prima della definizione.
- **Definizione**: `int f(int x) { return x+1; }`.
- **Parametri**: passaggio per valore; per modificare dati esterni usare puntatori.
- **Return**: valore ritornato; usare `void` quando non si ritorna nulla.

### Esempio
```c
#include <stdio.h>

int somma(int a, int b);

int main(void) {
    printf("%d\n", somma(2,3));
}
int somma(int a, int b) {
    return a + b;
}
```

### Note
- Separare prototipi in header (`.h`) e implementazioni in `.c`.
- Gestire i casi di errore tramite codici di ritorno o errno.

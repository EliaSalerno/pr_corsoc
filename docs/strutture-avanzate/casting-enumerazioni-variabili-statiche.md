# Casting, enumerazioni e variabili statiche in C

**Categoria:** Strutture avanzate

Fonte: `README.md`

## Descrizione

Breve panoramica su tre concetti distinti ma spesso usati insieme:

- **Casting**: conversione esplicita di tipo quando necessario. Esempio: `double d = 3.0; int i = (int)d;` — attenzione alla perdita di dati.

- **Enumerazioni (`enum`)**: definiscono un insieme di costanti con nome. Esempio:

```c
enum colore { ROSSO, VERDE, BLU };

enum colore c = ROSSO;
```

- **Variabili statiche**: persistono per tutta la durata del programma. All’interno di una funzione conservano il loro valore tra le chiamate; a livello file hanno visibilità limitata al file.

### Buone pratiche
- Evitare cast non necessari che nascondono bug.
- Usare `enum` per gruppi logici di costanti migliorando la leggibilità.
- Usare `static` per limitare l’uso di simboli globali.

### Esempio combinato
```c
static int counter = 0;
void incr(void) { counter++; }
```
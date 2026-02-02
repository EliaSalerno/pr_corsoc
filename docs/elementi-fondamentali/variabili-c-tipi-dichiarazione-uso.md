# Variabili in C: tipi, dichiarazione, uso

**Categoria:** Elementi fondamentali

Fonte: `README.md`

## Descrizione

- **Tipi base**: `int`, `char`, `float`, `double` e qualificatori `signed`/`unsigned`, `short`/`long`.
- **Dichiarazione**: `tipo nome;` o `tipo nome = valore;` (preferire inizializzazione).
- **Scope e durata**: variabili locali (stack), globali (data segment), statiche (persistono tra le chiamate), automatiche.

### Convenzioni
- Nomi significativi (`count`, `index`) e lowercase_with_underscores per progetti C.
- Evitare variabili globali quando possibile.

### Esempio
```c
int add(int a, int b) {
    int result = a + b; // variabile locale
    return result;
}
```
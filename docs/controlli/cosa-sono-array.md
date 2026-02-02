# Cosa sono gli Array in C

**Categoria:** Controlli

Fonte: `README.md`

## Descrizione

Un array è una sequenza contigua di elementi dello stesso tipo in memoria. Esempio:
```c
int a[10];
```
- Accesso tramite indice: `a[i]` (0-based).
- **Limiti**: dimensione fissa se allocato staticamente; attenzione a out-of-bounds.

### Nota sulla sintassi
`int a[n];` è consentito in C99 come variabile-length array (VLA) se n è variabile e supportato dal compilatore.

### Best practices
- Usare costanti per dimensioni: `#define MAX 100`
- Per array dinamici usare `malloc`.

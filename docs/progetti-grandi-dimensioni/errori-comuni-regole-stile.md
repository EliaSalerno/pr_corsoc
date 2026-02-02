# Errori comuni e regole di stile in C

**Categoria:** Progetti di grandi dimensioni

Fonte: `README.md`

## Descrizione

- **Errori comuni**: buffer overflow, use-after-free, memory leak, off-by-one, non controllo dei ritorni di funzione.
- **Linee guida**: usare nomi chiari, commenti dove serve, codice modularizzato, header con include guard, test e CI.

### Strumenti utili
- Valgrind per memory leak, sanitizer (`-fsanitize=address,undefined`) per debugging.
- Static analyzer (clang-tidy, cppcheck).

### Raccomandazioni
- Scrivere test unitari e integrare analisi automatica nel processo di build.

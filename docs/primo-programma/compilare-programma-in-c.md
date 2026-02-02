# Compilare un programma in C

**Categoria:** 1° programma

Fonte: `README.md`

## Descrizione

Fasi di compilazione:
- **Preprocessing**: gestione `#include`, macro.
- **Compilazione**: traduce sorgente in assembly/obj.
- **Linking**: crea l’eseguibile collegando le librerie.

### Esempi (gcc/clang)
```bash
gcc -Wall -Wextra -o prog main.c utils.c
# Compila e linka in un unico passaggio

gcc -c main.c   # genera main.o
gcc -c utils.c  # genera utils.o
gcc -o prog main.o utils.o  # link
```

### Consigli
- Abilitare warning (`-Wall -Wextra`) e usare `-O2` per ottimizzazione.
- Usare `-g` per il debug con gdb.

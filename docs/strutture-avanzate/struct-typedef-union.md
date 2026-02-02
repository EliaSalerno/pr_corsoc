# Struct, typedef e union: utilizzo dei dati strutturati in C

**Categoria:** Strutture avanzate

Fonte: `README.md`

## Descrizione

- **struct**: raggruppa variabili correlate:
```c
struct punto { int x; int y; };
struct punto p = { .x = 1, .y = 2 };
```
- **typedef**: alias per tipi (migliora leggibilità):
```c
typedef struct punto Punto;
Punto p2;
```
- **union**: condivide lo stesso spazio per più membri (uso per ottimizzazione o reinterpretazione dati):
```c
union valore { int i; float f; char s[4]; };
```

### Attenzioni
- Gestire padding e allineamento delle struct.
- Usare union con cautela e solo quando necessario.

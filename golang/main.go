package main

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

func main() {

	// Conectarse a la base de datos  5432
	connectionString := "host=localhost port=5432 user=postgres password=ZeroZX dbname=DataBaseGraphql  sslmode=disable"

	db, err := sql.Open("postgres", connectionString)

	if err != nil {
		panic(err)
	}
	defer db.Close()

	rows, err := db.Query("SELECT id, name, description, price, rank, state FROM product ORDER BY rank DESC LIMIT 3")
	if err != nil {
		panic(err)
	}
	defer rows.Close()
	for rows.Next() {
		// Obtener los datos de la fila
		var id int64
		var name string
		var description string
		var price int
		var rank float64
		var state string

		err := rows.Scan(&id, &name, &description, &price, &rank, &state)
		if err != nil {
			panic(err)
		}

		// Mostrar los datos de la fila
		fmt.Println(name, price, rank, state)
	}
}

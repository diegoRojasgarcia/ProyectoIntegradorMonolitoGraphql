package main

import (
	"database/sql"
	"fmt"

	_ "github.com/lib/pq"
)

func main() {

	// Conectarse a la base de datos
	db, err := sql.Open("mysql", "postgress:ZeroZX@tcp(localhost:3306)/DataBaseGraphql")
	if err != nil {
		panic(err)
	}

	// Ejecutar la consulta
	rows, err := db.Query("SELECT * FROM product where id = 1")
	if err != nil {
		panic(err)
	}
	defer rows.Close()
	// Iterar sobre las filas de la consulta
	for rows.Next() {
		// Obtener los datos de la fila
		var id int
		var name string

		err := rows.Scan(&id, &name)
		if err != nil {
			panic(err)
		}

		// Imprimir los datos de la fila
		fmt.Println(id, name)
	}
}

-- Problem 1:
SELECT email FROM customers ORDER BY email;

-- Problem 2:
SELECT id
FROM orders
WHERE customer_id = 
    (SELECT id
    FROM customers
    WHERE fname = 'Elizabeth' AND lname = 'Crocker');

-- Problem 3:
SELECT SUM(num_cupcakes)
FROM orders
WHERE processed = false;

-- Problem 4:
SELECT c.name, SUM(o.num_cupcakes) AS sum
FROM cupcakes AS c
    LEFT JOIN orders AS o
        ON c.id = o.cupcake_id
GROUP BY c.name
ORDER BY c.name;

-- Problem 5:
SELECT email, SUM(orders.num_cupcakes) AS total
FROM customers
    JOIN orders
        ON customers.id = customer_id
GROUP BY email
ORDER BY total DESC;

-- Problem 6:
SELECT fname, lname, email
FROM customers
    JOIN orders
        ON customers.id = customer_id
WHERE orders.cupcake_id = 5 AND orders.processed = true
LIMIT 1;
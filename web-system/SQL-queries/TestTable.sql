

-- create test table
CREATE TABLE Test(
	TestID INT PRIMARY KEY,
	someNumber INT
)

-- add test data

INSERT INTO Test(TestID, someNumber)
VALUES	(1, 2),
		(2, 4),
		(3, 6)
--EJERCICIO 1
use adventureworks;

DECLARE @salesOrderNumber AS NVARCHAR(30);
DECLARE @customerID AS INT = 29847;

SELECT @salesOrderNumber = SalesOrderNumber FROM SalesLT.SalesOrderHeader
WHERE CustomerID = @customerID;

PRINT 'El orderNumber es: ' + @salesOrderNumber;

---EJERCICIO 2
GO
DECLARE @customerID AS INT = 1;
DECLARE @fname AS NVARCHAR(20);
DECLARE @lname AS NVARCHAR(30);

WHILE @customerID <=10
	BEGIN
		SELECT @fname = FirstName, @lname = LastName FROM SalesLT.Customer
			WHERE CustomerID = @customerID;
		PRINT 'Nombre: ' + @fname + ' ' + @lname ;
		SET @customerID += 1;
	END;
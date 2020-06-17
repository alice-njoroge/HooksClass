CREATE PROCEDURE [dbo].[GetTodos](@TodoID BIGINT = NULL)
    AS
    BEGIN
        SET NOCOUNT ON;
        BEGIN TRY
            IF (@TodoID IS NOT NULL)
                BEGIN
                    SELECT Title, TodoID, Description, Done, InsertedDTM
                    FROM [dbo].[Todos]
                    WHERE TodoID = @TodoID
                      AND IsDeleted = 0
                    FOR JSON PATH, INCLUDE_NULL_VALUES
                end
            ELSE
                BEGIN
                    SELECT Title, TodoID, Description, Done, InsertedDTM
                    FROM [dbo].[Todos]
                    WHERE IsDeleted = 0
                    FOR JSON PATH, INCLUDE_NULL_VALUES
                end
        END TRY
        BEGIN CATCH
            THROW ;
        end catch
    end
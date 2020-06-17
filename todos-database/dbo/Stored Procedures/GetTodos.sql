CREATE PROCEDURE [dbo].[GetTodos](@TodoID BIGINT = NULL)
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        IF (@TodoID IS NOT NULL)
            BEGIN
                SELECT * FROM [dbo].[Todos] WHERE TodoID = @TodoID FOR JSON PATH, INCLUDE_NULL_VALUES
            end
        ELSE
            BEGIN
                SELECT * FROM [dbo].[Todos] FOR JSON PATH, INCLUDE_NULL_VALUES
            end
    END TRY
    BEGIN CATCH
        THROW ;
    end catch
end
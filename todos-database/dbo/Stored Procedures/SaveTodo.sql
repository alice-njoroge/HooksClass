CREATE PROCEDURE [dbo].[SaveTodo](@TodoID BIGINT = NULL,
                                  @Title VARCHAR(255),
                                  @Description TEXT = NULL,
                                  @Done Bit = NULL,
                                  @IsDeleted Bit = NULL)
AS
BEGIN
    SET NOCOUNT ON;
    BEGIN TRY
        IF (@TodoID IS NOT NULL)
            BEGIN
                UPDATE [dbo].[Todos]
                SET Title= ISNULL(@Title, Title),
                    Description= ISNULL(@Description, Description),
                    Done= ISNULL(@Done, Done),
                    IsDeleted= ISNULL(@IsDeleted, IsDeleted)
                WHERE TodoID = @TodoID
            end
        ELSE
            BEGIN
                INSERT INTO [dbo].[Todos] (Title, Description, Done)
                VALUES (@Title, @Description, ISNULL(@Done, 0))
            end
    END TRY
    BEGIN CATCH
        THROW ;
    end catch
end
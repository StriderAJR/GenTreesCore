using System.Collections.Generic;
using System.Data.SqlTypes;

namespace GenTreesCore.Entities
{
    public class GenTreeDateTime : INullable
    {
        public bool IsNull { get; }
        public int Id { get; set; }
        public GenTreeEra Era { get; set; }
        public uint Year { get; set; }
        public uint Month { get; set; }
        public uint Day { get; set; }
        public uint Hour { get; set; }
        public uint Minute { get; set; }
        public uint Second { get; set; }

        public string ToDateTimeString()
        {
            return $"{Era.Name}, {Year}/{Month}/{Day} {Hour}:{Minute}:{Second}";
        }

        public string ToShortDateTimeString()
        {
            return $"{Year}/{Month}/{Day}, {Era.ShortName}";
        }
    }

    /// <summary>
    /// Настройка летоисчисления
    /// </summary>
    public class GenTreeDateTimeSetting
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public User Owner { get; set; }
        public bool IsPrivate { get; set; }
        public List<GenTreeEra> Eras { get; set; }
        /// <summary>
        /// Кол-во месяцев в году
        /// TODO настройка каждого месяца, чтобы можно было поменять его название и кол-во дней в месяце
        /// </summary>
        public int YearMonthCount { get; set; }
    }

    /// <summary>
    /// Эпоха летоисчисления
    /// </summary>
    public class GenTreeEra
    {
        public int Id { get; set; }
        /// <summary>
        /// Название эпохи
        /// Например, "Первая Эпоха" или "Эпоха Древ"
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// Краткое название эпохи, используется в подписях годов
        /// Например, "П.Э." или "Э.Д."
        /// </summary>
        public string ShortName { get; set; }
        /// <summary>
        /// Справочная информация по эпохе
        /// </summary>
        public string Description { get; set; }
        /// <summary>
        /// Год начала эпохи в сквозном летоисчислении (если бы не было разделения на эпохи)
        /// </summary>
        public uint ThroughBeginYear { get; set; }
        /// <summary>
        /// Длительность эпохи в годах
        /// </summary>
        public uint? YearCount { get; set; }
    }
}

import { memo } from "react";
import Select, {
  ActionMeta,
  MultiValue,
  SingleValue,
  StylesConfig,
} from "react-select";
import makeAnimated from "react-select/animated";
import { useShallow } from "zustand/react/shallow";
import { useGetGenre } from "../../hooks/useGetGenre";
import { useParams } from "react-router-dom";
import { sortMovie, sortTvShow } from "../../lib/constant";
import useStore from "../../store/useStore";

export type Sort = {
  value: string;
  label: string;
};
export type Genre = {
  id: number;
  name: string;
};

const FilterLists = memo(() => {
  const animatedComponents = makeAnimated();
  const {
    selectedGenre,
    selectedSort,
    setSelectedGenre,
    setSelectedSort,
    setWithGenres,
    setSortBy,
    clearGenres,
    clearSortBy,
  } = useStore(
    useShallow((state) => ({
      selectedGenre: state.selectedGenre,
      selectedSort: state.selectedSort,
      setSelectedGenre: state.setSelectedGenre,
      setSelectedSort: state.setSelectedSort,
      setWithGenres: state.setWithGenres,
      setSortBy: state.setSortBy,
      clearGenres: state.clearGenres,
      clearSortBy: state.clearSortBy,
    }))
  );

  const { mediaType } = useParams();
  const { exploreItem } = useParams();

  const { data: filterGenres } = useGetGenre(mediaType!);

  const topRatedMovie = mediaType === "movie" && exploreItem === "top-rated";
  const topRatedTV = mediaType === "tv" && exploreItem === "top-rated";

  const handleOnChange = (
    selectedItems: MultiValue<Genre>,
    action: ActionMeta<Genre>
  ) => {
    setSelectedGenre(selectedItems);

    if (action.action !== "clear") {
      const genreId = selectedItems.map((item) => item.id);
      const filterGenreId = genreId.toString();
      setWithGenres(filterGenreId);
    } else {
      clearGenres();
    }
  };

  const handleOnChangeBySort = (
    selectedItems: MultiValue<Sort> | SingleValue<Sort>,
    action: ActionMeta<Sort>
  ) => {
    setSelectedSort(selectedItems as Sort);

    if (action.action !== "clear") {
      setSortBy((selectedItems as Sort)?.value);
    } else {
      if (topRatedMovie || topRatedTV) {
        setSortBy(sortMovie[2].value);
      } else {
        clearSortBy();
      }
    }
  };

  const colorStyles: StylesConfig<Genre, true> = {
    control: (styles) => ({
      ...styles,

      backgroundColor: "rgb(49, 54, 63)",
      border: "1px solid #6b7280",
      minWidth: "280px",
      paddingLeft: "10px",
    }),
    multiValue: (styles) => ({
      ...styles,
      minWidth: "80%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "15px",
      borderRadius: "5px",
      backgroundColor: "#ec4899",
      color: "white",
    }),
    multiValueLabel: (styles) => ({
      ...styles,
      paddingLeft: "10px",
      color: "white",
    }),
    multiValueRemove: (styles) => ({
      ...styles,
      borderRadius: "50%",
      width: "20px",
      height: "20px",
    }),
    input: (styles) => ({
      ...styles,
      color: "#9ca3af",
    }),
    placeholder: (styles) => ({
      ...styles,
      color: "#9ca3af",
      fontSize: "15px",
    }),
    clearIndicator: (styles) => ({
      ...styles,
      color: "#d1d5db",
      cursor: "pointer",
    }),

    indicatorSeparator: (styles) => ({
      ...styles,
      minHeight: "25px",
      backgroundColor: "#9ca3af",
    }),
  };

  // single select

  const singleColorStyles: StylesConfig<Sort, true> = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "rgb(49, 54, 63)",
      border: "1px solid #6b7280",
      minWidth: "280px",
      paddingLeft: "10px",
    }),

    singleValue: (styles) => ({
      ...styles,
      width: "100%",
      display: "flex",
      fontSize: "15px",
      color: "white",
    }),

    indicatorSeparator: (styles) => ({
      ...styles,
      minHeight: "25px",
      backgroundColor: "#9ca3af",
    }),

    placeholder: (styles) => ({
      ...styles,
      color: "#9ca3af",
      fontSize: "15px",
    }),
  };

  return (
    <section className="mb-5">
      <div className="flex flex-col items-start gap-5 sm:flex-row ">
        <Select
          name="genres"
          styles={colorStyles}
          value={selectedGenre}
          options={filterGenres?.genres}
          closeMenuOnSelect={false}
          getOptionLabel={(option: Genre) => option.name}
          getOptionValue={(option: Genre) => `${option.id}`}
          components={animatedComponents}
          onChange={handleOnChange}
          isMulti
          placeholder="Select genres"
        />
        <Select
          name="sort"
          value={selectedSort}
          styles={singleColorStyles}
          options={mediaType === "movie" ? sortMovie : sortTvShow}
          onChange={handleOnChangeBySort}
          placeholder="Sort Result By"
          isClearable
        />
      </div>
    </section>
  );
});

export default FilterLists;

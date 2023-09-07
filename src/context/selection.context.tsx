"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type StateType = {
	page: string;
};

type ActionType = {
	type: string;
};

const initialState: StateType = {
	page: "Projects",
};

const reducer = (state: StateType, action: ActionType) => {
	switch (action.type) {
		case "Projects":
			return { ...state, page: "Projects" };
		case "Experience":
			return { ...state, page: "Experience" };
		case "About":
			return { ...state, page: "About" };
		case "Socials":
			return { ...state, page: "Socials" };
		default:
			return state;
	}
};

export const SelectionContext = createContext<{
	state: StateType;
	dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const SelectionContextProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<SelectionContext.Provider value={{ state, dispatch }}>
			{children}
		</SelectionContext.Provider>
	);
};
